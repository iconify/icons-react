import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pri320nxf.css';
import '../../css/h/hana-fm8g.css';
import '../../css/b/b6ymlcrjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="pri320nxf"/><circle class="hana-fm8g"/><path class="b6ymlcrjg"/></g>`,
		"fallback": "stash:cam-web-solid",
	});
}

export default Component;
