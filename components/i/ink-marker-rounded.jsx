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
		"content": `<style>.d0hba7bul {
  fill: currentColor;
  d: path("m6.8 21.4l-.95-.95L4.8 21.5q-.475.475-1.162.488T2.5 21.5q-.475-.475-.475-1.15T2.5 19.2l1.05-1.05l-.95-1L16.45 3.3q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725zm4.3-9.9l-5.7 5.65l1.45 1.45l5.65-5.7z");
}
</style><path class="d0hba7bul"/>`,
		"fallback": "material-symbols:ink-marker-rounded",
	});
}

export default Component;
