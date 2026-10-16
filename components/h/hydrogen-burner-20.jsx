import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o63iyfbss.css';
import '../../css/t/tmavxu-df.css';
import '../../css/u/u7fpslg-e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o63iyfbss"/><path class="tmavxu-df"/><path class="u7fpslg-e"/>`,
		"fallback": "energy-icons:hydrogen-burner-20",
	});
}

export default Component;
