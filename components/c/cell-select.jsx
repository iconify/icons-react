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
		"content": `<style>.svk3bgbqo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.125 6.25h12.75q3.375 0 3.375 3.375v4.75l-.001.124q1.001.5 1.001 2.001v.5q0 2.25-2.25 2.25h-.5q-1.837 0-2.174-1.5H5.125q-3.375 0-3.375-3.375v-4.75q0-1.398.989-2.386q.988-.989 2.386-.989m14.613 8q.012-.122.012-.25v-4q0-2.25-2.25-2.25h-12q-.932 0-1.591.659T3.25 10v4q0 .932.659 1.591t1.591.659h11.757q.122-2 2.243-2z");
}
</style><path class="svk3bgbqo"/>`,
		"fallback": "uix-solid:cell-select",
	});
}

export default Component;
