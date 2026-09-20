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
		"content": `<style>.ds7ls8-pv {
  fill: currentColor;
  d: path("M12 17.308L15.308 14l-.714-.713L12 15.88l-2.594-2.594l-.714.713zm-2.594-6.594L12 8.119l2.594 2.594l.714-.713L12 6.692L8.692 10zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="ds7ls8-pv"/>`,
		"fallback": "material-symbols-light:expansion-panels",
	});
}

export default Component;
