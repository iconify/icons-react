import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g3c64sbig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.92 5.624c7.5 0 6.384 10.846 10.846 10.846c3.285 0 2.851-7.251 8.987-7.251c5.702 0 7.747 6.903 7.747 14.762s-3.223 14.676-7.251 14.676c-5.206 0-5.516-7.375-9.483-7.375s-3.408 11.094-10.412 11.094c-6.445 0-9.854-7.561-9.854-19.585S9.776 5.624 14.92 5.624");
}
</style><path class="g3c64sbig"/>`,
		"fallback": "arcticons:hily",
	});
}

export default Component;
