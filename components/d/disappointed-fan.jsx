import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/eveezybof.css';
import '../../css/h/h3oolie6y.css';
import '../../css/e/e53fkgb6n.css';
import '../../css/q/qpa9wkqqs.css';
import '../../css/d/d49y694un.css';
import '../../css/r/rij0dctym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="eveezybof"/><path class="h3oolie6y"/><path class="e53fkgb6n"/><path class="qpa9wkqqs"/><path class="d49y694un"/><path class="rij0dctym"/></g>`,
		"fallback": "streamline-memes:disappointed-fan",
	});
}

export default Component;
