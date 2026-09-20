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
		"content": `<style>.sn4h8devx {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v7.379q-1.083-.762-2.314-1.224q-1.23-.463-2.552-.463q-2.92 0-5.245 1.946Q8.566 16.586 7.262 19zm13.134 3q-1.832 0-3.382-.94t-2.483-2.521q.933-1.581 2.483-2.522t3.383-.94t3.382.94T22 18.538q-.933 1.581-2.483 2.521q-1.55.941-3.383.941m1.257-2.205q.513-.513.513-1.256t-.513-1.256t-1.256-.514t-1.256.513t-.513 1.256t.512 1.256t1.256.514t1.257-.513m-1.963-.548q-.293-.29-.293-.706t.29-.71t.707-.292q.416 0 .71.29t.293.707t-.291.71t-.707.293t-.709-.291");
}
</style><path class="sn4h8devx"/>`,
		"fallback": "material-symbols-light:folder-eye-sharp",
	});
}

export default Component;
