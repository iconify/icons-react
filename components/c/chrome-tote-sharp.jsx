import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k37ci7kfb {
  fill: currentColor;
  d: path("m14.525 13.5l4-4l-1.4-1.425l-1.6 1.575V5.5h-2v4.15l-1.6-1.575l-1.4 1.425ZM3.75 22.125L1.9 7.2l3.125-.35V19h13.45v1.275ZM7.025 17V2h15v15Z");
}
</style><path class="k37ci7kfb"/>`,
		"fallback": "material-symbols:chrome-tote-sharp",
	});
}

export default Component;
