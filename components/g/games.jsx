import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc8hhiglu.css';
import '../../css/o/ot71gxx5a.css';
import '../../css/i/i9-6g599y.css';
import '../../css/m/mrjw428aa.css';
import '../../css/m/m9st3rkyl.css';
import '../../css/v/vfjy9g0uf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sc8hhiglu"/><path class="ot71gxx5a"/><circle class="i9-6g599y"/><circle class="mrjw428aa"/><path class="m9st3rkyl"/><circle class="vfjy9g0uf"/>`,
		"fallback": "flat-ui:games",
	});
}

export default Component;
