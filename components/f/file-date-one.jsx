import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z03iq3bby.css';
import '../../css/m/m9_4pob_d.css';
import '../../css/y/yqn8y9vgz.css';
import '../../css/g/grno8j8na.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="z03iq3bby"/><circle class="m9_4pob_d"/><path class="yqn8y9vgz"/><path class="grno8j8na"/></g>`,
		"fallback": "icon-park:file-date-one",
	});
}

export default Component;
