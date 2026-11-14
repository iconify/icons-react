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
		"content": `<style>.l90nuubrm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 4.25H4q-2.25 0-2.25 2.25T4 8.75h1.326q-.076.337-.076.75v3q0 .932.659 1.591t1.591.659H8q.932 0 1.591-.659t.659-1.591v-3q0-.413-.076-.75h3.652q-.076.337-.076.75v3q0 .932.659 1.591T16 14.75h.5q.932 0 1.591-.659t.659-1.591v-3q0-.413-.076-.75H20q2.25 0 2.25-2.25T20 4.25m-8.498 13.189q-1.752 1.558-3.504 0q-2.748-2.442-5.496 0q-.112.1-.177.234t-.074.283t.04.29t.148.252q.05.055.108.1q.059.045.126.077q.066.032.138.051q.071.018.145.023q.074.004.147-.006t.143-.034q.07-.025.133-.062q.064-.037.119-.086q1.752-1.558 3.504 0q2.748 2.442 5.496 0q1.752-1.558 3.504 0q2.748 2.442 5.496 0q.112-.1.177-.234t.074-.283t-.04-.29t-.148-.252q-.05-.055-.108-.1q-.059-.045-.126-.077q-.066-.032-.138-.051q-.071-.018-.145-.023q-.074-.004-.147.006t-.143.034q-.07.025-.133.062q-.064.037-.119.086q-1.752 1.558-3.504 0q-2.748-2.442-5.496 0");
}
</style><path class="l90nuubrm"/>`,
		"fallback": "uix-solid:bridge-beam",
	});
}

export default Component;
