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
		"content": `<style>.pml7bjdqo {
  fill: currentColor;
  d: path("M7.425 21.575Q7 21.15 7 20.5t.425-1.075T8.5 19t1.075.425T10 20.5t-.425 1.075T8.5 22t-1.075-.425m11 0Q18 21.15 18 20.5t.425-1.075T19.5 19t1.075.425T21 20.5t-.425 1.075T19.5 22t-1.075-.425M13.5 7.6L9.6 2.9q.9-.45 1.95-.675T13.8 2q1.275 0 2.438.363T18.3 3.4zM12 18q-2.075 0-3.537-1.463T7 13V5.3l-.5-.6q-.35-.425-.587-.562T5.4 4q-.6 0-1 .45T4 5.5H2q0-1.425.988-2.463T5.4 2q.75 0 1.375.35t1.275 1.1l10.7 12.9q.425.5.163 1.075T18 18z");
}
</style><path class="pml7bjdqo"/>`,
		"fallback": "material-symbols:child-friendly",
	});
}

export default Component;
