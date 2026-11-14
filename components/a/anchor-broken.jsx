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
		"content": `<style>.au86xlbku {
  d: path("M12 7.5V22");
}

.ey5m305ui {
  d: path("M7.12891 20.2381C8.48041 21.3433 10.1713 22 12.0005 22C16.4005 22 20.0005 18.2 20.0005 13.5");
}

.hl2ugqc9h {
  d: path("M8 11.5H16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jzfybiepz {
  d: path("M14.75 4.75C14.75 6.2688 13.5188 7.5 12 7.5C10.4812 7.5 9.25 6.2688 9.25 4.75C9.25 3.2312 10.4812 2 12 2C13.5188 2 14.75 3.2312 14.75 4.75Z");
}

.mr4hkacge {
  d: path("M4 13.5C4 14.9935 4.3635 16.3961 5.0006 17.6147");
}

.s8523bbgv {
  d: path("M2 15.7L4 13.5L6.6 14.9");
}

.vm9i956_w {
  d: path("M22.0004 15.7L20.0004 13.5L17.4004 14.9");
}
</style><g class="hntgybcog"><path class="jzfybiepz"/><path class="au86xlbku"/><path class="hl2ugqc9h"/><path class="mr4hkacge"/><path class="ey5m305ui"/><path class="s8523bbgv"/><path class="vm9i956_w"/></g>`,
		"fallback": "solar:anchor-broken",
	});
}

export default Component;
