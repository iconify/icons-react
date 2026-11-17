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
		"content": `<style>.n1m_2hbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 10.5V13.5M8 8V16M12 5V19M16 10V14M20 10.5V13.5");
}
</style><path class="n1m_2hbzz"/>`,
		"fallback": "keyline-icons:audio-lines-mid",
	});
}

export default Component;
