import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugqqb6qaw.css';
import '../../css/s/sk3mmrbov.css';
import '../../css/f/f9g5yw0qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ugqqb6qaw"/><path class="sk3mmrbov"/><path class="f9g5yw0qa"/></g>`,
		"fallback": "mage:file-records",
	});
}

export default Component;
