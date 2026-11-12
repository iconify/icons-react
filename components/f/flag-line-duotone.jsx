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
		"content": `<style>.avnp3nxox {
  d: path("M5 22V14V4V2");
}

.f2ui_qbot {
  d: path("M5 4.00004L7.47067 3.50591C9.1212 3.1758 10.8321 3.33288 12.3949 3.95801L12.5986 4.03947C14.1597 4.66393 15.878 4.78055 17.5092 4.37274C18.2665 4.18343 19 4.75617 19 5.53673V12.9038C19 13.548 18.5615 14.1097 17.9364 14.2659L17.722 14.3195C15.9524 14.7619 14.0885 14.6354 12.3949 13.958C10.8321 13.3329 9.1212 13.1758 7.47067 13.5059L5 14");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><path class="avnp3nxox"/><path class="f2ui_qbot"/></g>`,
		"fallback": "solar:flag-line-duotone",
	});
}

export default Component;
