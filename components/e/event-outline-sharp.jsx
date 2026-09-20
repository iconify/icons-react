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
		"content": `<style>.gyn-dwb9s {
  fill: currentColor;
  d: path("M12.725 17.275Q12 16.55 12 15.5t.725-1.775T14.5 13t1.775.725T17 15.5t-.725 1.775T14.5 18t-1.775-.725M3 22V4h3V2h2v2h8V2h2v2h3v18zm2-2h14V10H5zM5 8h14V6H5zm0 0V6z");
}
</style><path class="gyn-dwb9s"/>`,
		"fallback": "material-symbols:event-outline-sharp",
	});
}

export default Component;
