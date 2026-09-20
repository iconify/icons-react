import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mixj4hbyv.css';
import '../../css/e/e78ovcj5m.css';
import '../../css/a/avf63ltwu.css';
import '../../css/b/b3w4k5oip.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="mixj4hbyv"/><rect class="e78ovcj5m"/><rect class="avf63ltwu"/><path class="b3w4k5oip"/>`,
		"fallback": "material-icon-theme:apiblueprint",
	});
}

export default Component;
