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
		"content": `<style>.znyhcgwzb {
  fill: currentColor;
  d: path("M10.2 13.7q.325 0 .613-.05t.562-.15l3.775 3.75l2.1-2.1l-3.75-3.775q.1-.275.15-.55t.05-.625q0-1.425-1.012-2.437T10.25 6.75q-.425 0-.85.113t-.825.312l2.35 2.35l-1.4 1.4l-2.35-2.35q-.2.4-.312.825t-.113.85q0 1.425 1.013 2.438T10.2 13.7M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="znyhcgwzb"/>`,
		"fallback": "material-symbols:build-circle-sharp",
	});
}

export default Component;
