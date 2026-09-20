import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecpj_td6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ecpj_td6x"/>`,
		"fallback": "streamline-logos:bitbucket-logo-solid",
	});
}

export default Component;
