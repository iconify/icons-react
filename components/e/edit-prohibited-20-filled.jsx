import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.acd6lac-b {
  fill: currentColor;
  d: path("M12.92 2.873a2.975 2.975 0 0 1 4.207 4.207l-.669.669l-4.207-4.207zM11.544 4.25l-7.999 7.999a2.44 2.44 0 0 0-.655 1.194l-.878 3.95a.5.5 0 0 0 .597.597l3.926-.873a2.5 2.5 0 0 0 1.234-.678L8.207 16A5.5 5.5 0 0 1 15 9.207l.751-.75zM9 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.5 3.5 0 0 1 10 14.5m3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 13.5 18");
}
</style><path class="acd6lac-b"/>`,
		"fallback": "fluent:edit-prohibited-20-filled",
	});
}

export default Component;
