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
		"content": `<style>.s6ktj0b_i {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-2-3h4q.425 0 .713-.288T15 16t-.288-.712T14 15h-1V9h1q.425 0 .713-.288T15 8t-.288-.712T14 7h-4q-.425 0-.712.288T9 8t.288.713T10 9h1v6h-1q-.425 0-.712.288T9 16t.288.713T10 17");
}
</style><path class="s6ktj0b_i"/>`,
		"fallback": "material-symbols:highlight-text-cursor-outline-rounded",
	});
}

export default Component;
