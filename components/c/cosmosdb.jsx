import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-z07utpj.css';
import '../../css/d/d2xkq0bie.css';
import '../../css/v/vc6oyzbtg.css';
import '../../css/y/ykk37hror.css';
import '../../css/x/xu-e9yfuh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-z07utpj"/><path class="d2xkq0bie"/><path class="vc6oyzbtg"/><path class="ykk37hror"/><path class="xu-e9yfuh"/>`,
		"fallback": "devicon:cosmosdb",
	});
}

export default Component;
