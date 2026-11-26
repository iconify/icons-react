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
		"content": `<style>.jwj3ol_8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.0028 5L18.9972 5C21.1004 5 22.5507 7.1079 21.7991 9.0722L18.7377 17.0722C18.2934 18.2333 17.179 19 15.9359 19L8.0641 19C6.821 19 5.7066 18.2333 5.2623 17.0722L2.2009 9.0722C1.4493 7.1079 2.8996 5 5.0028 5Z");
}
</style><path class="jwj3ol_8a"/>`,
		"fallback": "keyline-icons:flow-manual-operation",
	});
}

export default Component;
