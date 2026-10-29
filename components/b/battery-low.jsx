import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkmfunbhg.css';
import '../../css/f/fvf990b7v.css';
import '../../css/b/b7ft_8p3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkmfunbhg wm-a"/><path class="fvf990b7v wm-k"/><path class="b7ft_8p3z wm-a"/>`,
		"fallback": "withicons-bauhaus:battery-low",
	});
}

export default Component;
