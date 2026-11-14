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
		"content": `<style>.gq52txjpa {
  d: path("M14.49 17.612c-.853.329-1.689.787-2.49 1.388c-3-2.25-6.5-2.5-9.5-1.5v-13c3-1 6.5-.75 9.5 1.5c3-2.25 6.5-2.5 9.5-1.5v10.77M12 6v13");
}

.pizvci63l {
  d: path("M18.25 15q.5 2.75 3.25 3.25q-2.75.5-3.25 3.25q-.5-2.75-3.25-3.25q2.75-.5 3.25-3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gq52txjpa"/><path class="pizvci63l"/></g>`,
		"fallback": "uix-sharp:ai-explain",
	});
}

export default Component;
