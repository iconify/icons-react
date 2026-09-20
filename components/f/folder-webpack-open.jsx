import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmnrj9_6h.css';
import '../../css/l/lrkaywonk.css';
import '../../css/a/auxtjjb7k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmnrj9_6h"/><path class="lrkaywonk"/><path class="auxtjjb7k"/>`,
		"fallback": "material-icon-theme:folder-webpack-open",
	});
}

export default Component;
