import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.gwocms_dw {
  fill: var(--svg-color--002cf2, #002cf2);
  d: path("M18.8 13.2h-5.6v5.6h5.6zm5.6-5.6h-5.6v5.6h5.6zm0 11.2h-5.6v5.6h5.6zM30 2h-5.6v5.6H30Zm0 22.4h-5.6V30H30Z");
}

.k-afuabcu {
  fill: var(--svg-color--000, #000);
  d: path("M7.6 24.4V2H2v28h16.8v-5.6h-5.6Z");
}
</style><g class="ft5dv1b6b"><path class="gwocms_dw"/><path class="k-afuabcu"/></g>`,
		"fallback": "vscode-icons:file-type-light-livekit",
	});
}

export default Component;
