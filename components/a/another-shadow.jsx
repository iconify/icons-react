import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h01tyzbfu {
  fill: none;
  stroke: currentColor;
}

.me04ld_hz {
  cx: 25.686px;
  cy: 16.366px;
  r: 1.466px;
  stroke-miterlimit: 10;
}

.ze4rzacrw {
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5c1.973 0 3.936-.272 5.835-.807c-2.424-.454-6.474-15.364-4.716-21.533c-1.03.04-2.03.242-3 .651L11.78 33.52c-2.384-4.658 3.399-9.26 6.747-13.802c.42-.57 1.03-1.139 1.344-1.71c-.926-1.574 1.252-3.5 3.141-5.402c.938-.944 1.495-2.494 2.774-3.247c1.181-.696 2.672-.93 4.49-.196c.566-.15 1.931-2.134 1.534-.065c1.021-.78 4.562-1.295 2.87-.195c1.865-.807 2.678.134 3.56-1.01A21.5 21.5 0 0 0 24 2.5");
}
</style><g class="h01tyzbfu"><path class="ze4rzacrw"/><circle class="me04ld_hz"/></g>`,
		"fallback": "arcticons:another-shadow",
	});
}

export default Component;
