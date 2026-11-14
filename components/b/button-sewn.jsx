import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f75rfjbct {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M6.75 9q0-2.25 2.25-2.25T11.25 9q0 .595-.157 1.032l.907.907l.907-.907Q12.75 9.595 12.75 9q0-2.25 2.25-2.25T17.25 9T15 11.25q-.595 0-1.032-.157l-.907.907l.907.907q.437-.157 1.032-.157q2.25 0 2.25 2.25T15 17.25T12.75 15q0-.595.157-1.032L12 13.061l-.907.907q.157.437.157 1.032q0 2.25-2.25 2.25T6.75 15T9 12.75q.595 0 1.032.157l.907-.907l-.907-.907q-.437.157-1.032.157q-2.25 0-2.25-2.25");
}
</style><path class="f75rfjbct"/>`,
		"fallback": "uix-solid:button-sewn",
	});
}

export default Component;
