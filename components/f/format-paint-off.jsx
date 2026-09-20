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
		"content": `<style>.k0n_kgfql {
  fill: currentColor;
  d: path("M19 4v9.192q0 .612-.398 1.054t-1.03.513l-4.299-4.297H18V5h-1.634v3.712h-1V5h-1.847v1.962h-1V5H7.811l-.888-.889q.17-.065.345-.088Q7.444 4 7.635 4zm.833 17.26l-5.814-5.814V20q0 .413-.294.706T13.02 21h-2.058q-.412 0-.706-.294T9.962 20v-5.212H6.635q-.69 0-1.163-.462Q5 13.863 5 13.192V6.427l-2.26-2.26l.714-.713l17.092 17.092zM6 10.462h3.035L6 7.427z");
}
</style><path class="k0n_kgfql"/>`,
		"fallback": "material-symbols-light:format-paint-off",
	});
}

export default Component;
