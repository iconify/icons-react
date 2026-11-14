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
		"content": `<style>.baxzqcbeh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 7.25q1.968 0 3.359 1.391q.554.555.888 1.2q1.253-.773 2.506 0q.334-.645.888-1.2Q15.532 7.25 17.5 7.25t3.359 1.391T22.25 12t-1.391 3.359T17.5 16.75t-3.359-1.391T12.75 12q0-.325.038-.634q-.788-.641-1.576 0q.038.309.038.634q0 1.968-1.391 3.359T6.5 16.75t-3.359-1.391T1.75 12t1.391-3.359T6.5 7.25");
}
</style><path class="baxzqcbeh"/>`,
		"fallback": "uix-solid:eclipse-glasses",
	});
}

export default Component;
