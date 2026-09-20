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
		"content": `<style>.kmh9fyw-f {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-2-6h4q.425 0 .713-.288T15 15v-1q0-.425-.288-.712T14 13t-.712.288T13 14h-2v-4h2q0 .425.288.713T14 11t.713-.288T15 10V9q0-.425-.288-.712T14 8h-4q-.425 0-.712.288T9 9v6q0 .425.288.713T10 16");
}
</style><path class="kmh9fyw-f"/>`,
		"fallback": "material-symbols:copyright-rounded",
	});
}

export default Component;
