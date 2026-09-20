import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjg4ft7no.css';
import '../../css/m/macbzdbqy.css';
import '../../css/x/x6lke26ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjg4ft7no"/><path class="macbzdbqy"/><path class="x6lke26ww"/>`,
		"fallback": "qlementine-icons:eye-crossed-24",
	});
}

export default Component;
