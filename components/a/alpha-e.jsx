import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezdx6z26e.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezdx6z26e"/>`,
		"fallback": "memory:alpha-e",
	});
}

export default Component;
