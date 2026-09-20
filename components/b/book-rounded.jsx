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
		"content": `<style>.v8w2eacgw {
  fill: currentColor;
  d: path("M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21zM12 4v5.414q0 .242.19.36q.189.118.406-.012l.975-.572q.212-.13.417-.13t.416.13l.975.572q.217.13.419.012t.202-.36V4z");
}
</style><path class="v8w2eacgw"/>`,
		"fallback": "material-symbols-light:book-rounded",
	});
}

export default Component;
