import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cf5ovs9yz {
  fill: var(--svg-color--584539, #584539);
  d: path("M10 10h108v108H10z");
}
</style><path class="cf5ovs9yz"/>`,
		"fallback": "noto-v1:dark-skin-tone",
	});
}

export default Component;
