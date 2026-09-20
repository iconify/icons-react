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
		"content": `<style>.o_8lwcbja {
  fill-rule: evenodd;
  d: path("m16 3.611l14 24.778H2L16 3.611z");
}

.vc--wpv5i {
  stop-color: var(--svg-color--fff, #fff);
}
</style><defs><linearGradient id="vscodeIconsFileTypeZeit0" x1="1.459" x2="1.096" y1="32.377" y2="32.82" gradientTransform="matrix(113 0 0 -100 -112 3301)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="vc--wpv5i"/></linearGradient></defs><path fill="url(#vscodeIconsFileTypeZeit0)" class="o_8lwcbja"/>`,
		"fallback": "vscode-icons:file-type-zeit",
	});
}

export default Component;
