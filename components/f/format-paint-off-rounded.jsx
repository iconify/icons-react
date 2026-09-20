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
		"content": `<style>.hw51n_b3m {
  fill: currentColor;
  d: path("M12.663 6.818q-.144-.144-.144-.356V5H7.811l-.888-.889q.17-.065.345-.088Q7.444 4 7.635 4h10.557q.344 0 .576.232t.232.576v8.384q0 .612-.398 1.054t-1.03.514l-4.299-4.298H18V5h-1.634v3.212q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356V5h-1.847v1.462q0 .212-.144.356t-.356.144t-.356-.144M10.962 21q-.413 0-.707-.294T9.962 20v-5.212H6.635q-.69 0-1.163-.462Q5 13.863 5 13.192V6.427L3.094 4.521q-.146-.146-.153-.347t.159-.366t.357-.166t.356.166l16.38 16.384q.145.146.155.344t-.156.364q-.165.165-.356.165q-.192 0-.357-.165l-5.46-5.454V20q0 .413-.294.706T13.02 21zM6 10.462h3.035L6 7.427z");
}
</style><path class="hw51n_b3m"/>`,
		"fallback": "material-symbols-light:format-paint-off-rounded",
	});
}

export default Component;
