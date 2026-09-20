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
		"content": `<style>.dumw2q_os {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1-5h2q.825 0 1.413-.587T15 15V9q0-.825-.587-1.412T13 7h-2q-.825 0-1.412.588T9 9v6q0 .825.588 1.413T11 17m0-8h2v6h-2z");
}
</style><path class="dumw2q_os"/>`,
		"fallback": "material-symbols:counter-0",
	});
}

export default Component;
