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
		"content": `<style>.f24orlwjf {
  fill: currentColor;
  d: path("m2 20l6-8l-6-8h14l6 8l-.125.175Q21 11.6 20.025 11.3T18 11q-2.9 0-4.95 2.05T11 18q0 .525.075 1.025T11.3 20zm16 3q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-.725-2.75l3.475-3.45l-1.05-1.05l-2.425 2.375l-.975-.975l-1.05 1.075z");
}
</style><path class="f24orlwjf"/>`,
		"fallback": "material-symbols:all-match-sharp",
	});
}

export default Component;
