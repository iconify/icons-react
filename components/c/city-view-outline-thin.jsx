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
		"content": `<style>.bi34yzw-v {
  d: path("M12 21V4h7v17");
}

.hb_6svr8j {
  d: path("M3 21V10h7v11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.qowfo405a {
  d: path("M12 9h7");
}

.urzumpb2c {
  d: path("M3 14h7");
}
</style><g class="hntgybcog"><path class="hb_6svr8j"/><path class="bi34yzw-v"/><path class="urzumpb2c"/><path class="qowfo405a"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:city-view-outline-thin",
	});
}

export default Component;
