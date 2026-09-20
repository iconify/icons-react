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
		"content": `<style>.ewhateh5f {
  fill: currentColor;
  d: path("m9.698 12.09l1.708-4.69l7.45 2.71q1.171.42 1.707 1.543q.537 1.122.097 2.293l-.698 1.883zm-6.58.54l.347-.932l15.897 5.793l-.348.932zm2.168-2.388q-.615-.615-.615-1.48q0-.866.615-1.481q.616-.616 1.481-.616t1.481.616t.616 1.48t-.616 1.481t-1.48.616q-.866 0-1.482-.616");
}
</style><path class="ewhateh5f"/>`,
		"fallback": "material-symbols-light:airline-seat-flat-angled",
	});
}

export default Component;
