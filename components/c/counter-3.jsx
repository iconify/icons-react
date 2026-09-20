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
		"content": `<style>.y3s79ciqk {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-3-5h4q.825 0 1.413-.587T15 15v-1.5q0-.65-.425-1.075T13.5 12q.65 0 1.075-.425T15 10.5V9q0-.825-.587-1.412T13 7H9v2h4v2h-2v2h2v2H9z");
}
</style><path class="y3s79ciqk"/>`,
		"fallback": "material-symbols:counter-3",
	});
}

export default Component;
