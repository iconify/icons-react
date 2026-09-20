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
		"content": `<style>.jpi9sq6vn {
  fill: currentColor;
  d: path("M14.308 11.5h6.807V5.885h-6.807zM2.885 18.116h10.423V5.885H2.885zm5.211-5.077q-.433 0-.736-.304q-.302-.302-.302-.735t.302-.736q.303-.303.736-.303t.736.303t.302.736t-.302.735t-.736.303m6.212 5.078h6.808V12.5h-6.808z");
}
</style><path class="jpi9sq6vn"/>`,
		"fallback": "material-symbols-light:bento-sharp",
	});
}

export default Component;
