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
		"content": `<style>.o6-9xva7d {
  fill: currentColor;
  d: path("M9.5 13H12l.725 1.45q.125.275.375.413t.525.137H17q.425 0 .713-.288T18 14v-4q0-.425-.288-.712T17 9h-2l-.725-1.45q-.125-.275-.375-.413T13.375 7H9q-.425 0-.712.288T8 8v9.25q0 .325.213.538T8.75 18t.538-.213t.212-.537zm2.5 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="o6-9xva7d"/>`,
		"fallback": "material-symbols:flag-circle-rounded",
	});
}

export default Component;
