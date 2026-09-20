import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k17b-1bez.css';
import '../../css/f/flaiagb5f.css';
import '../../css/p/pknpwpb5q.css';
import '../../css/b/bpo0h2box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k17b-1bez"/><path class="flaiagb5f"/><path class="pknpwpb5q"/><path class="bpo0h2box"/>`,
		"fallback": "uim:house-user",
	});
}

export default Component;
