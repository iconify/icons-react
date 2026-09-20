import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da1i54d5m.css';
import '../../css/n/nb3vh0bqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da1i54d5m"/><path class="nb3vh0bqp"/>`,
		"fallback": "material-icon-theme:folder-flutter-open",
	});
}

export default Component;
