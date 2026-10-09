import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9wdjs-os.css';
import '../../css/k/kkcxbwb5w.css';
import '../../css/x/xwdhawfba.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9wdjs-os"/><path class="kkcxbwb5w"/><path class="xwdhawfba"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:image-plus-20-bold",
	});
}

export default Component;
