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
		"content": `<style>.pr6sjfbpe {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v8.225q-1.275-1.05-2.812-1.638T16 12q-3.575 0-6.187 2.35T6.3 20zm14 3q-2.275 0-4.2-1.2T9 18.5q.875-2.1 2.8-3.3T16 14t4.2 1.2t2.8 3.3q-.875 2.1-2.8 3.3T16 23m1.775-2.725q.725-.725.725-1.775t-.725-1.775T16 16t-1.775.725T13.5 18.5t.725 1.775T16 21t1.775-.725m-2.838-.712q-.437-.438-.437-1.063t.438-1.062T16 17t1.063.438t.437 1.062t-.437 1.063T16 20t-1.062-.437");
}
</style><path class="pr6sjfbpe"/>`,
		"fallback": "material-symbols:folder-eye-sharp",
	});
}

export default Component;
