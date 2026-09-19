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
		"content": `<style>.cvtr89xqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.803 17.803h3.742a6.29 6.29 0 0 1 6.314 6.262v.053a6.29 6.29 0 0 1-6.262 6.314h-.052l6.314 6.08");
}

.en1ojy54p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 5.768l18.5 11.166v19.994a5.29 5.29 0 0 1-5.28 5.304H10.804a5.29 5.29 0 0 1-5.304-5.28V16.934zm-6.197 18.35h12.394m-8.652-6.315h8.652");
}
</style><path class="en1ojy54p"/><path class="cvtr89xqq"/>`,
		"fallback": "arcticons:expense-manager",
	});
}

export default Component;
