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
		"content": `<style>.k4ul_3oks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.5998 13.2016L14.5998 16.1998C15.1334 16.5998 15.1334 17.4002 14.5998 17.8002L10.5998 20.7984C9.9405 21.2925 9 20.8221 9 19.9982L9 14.0018C9 13.1779 9.9405 12.7075 10.5998 13.2016ZM5 16.874C3.2748 16.4299 2 14.8638 2 13C2 10.7909 3.7909 9 6 9C6 5.6863 8.6863 3 12 3C15.3137 3 18 5.6863 18 9C20.2091 9 22 10.7909 22 13C22 14.8638 20.7252 16.4299 19 16.874");
}
</style><path class="k4ul_3oks"/>`,
		"fallback": "keyline-icons:cloud-play",
	});
}

export default Component;
